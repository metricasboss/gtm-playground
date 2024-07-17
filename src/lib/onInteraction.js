const RATING_COLORS = {
  good: "#0CCE6A",
  "needs-improvement": "#FFA400",
  poor: "#FF4E42",
};

export function onInteraction(callback) {
  const valueToRating = (score) =>
    score <= 200 ? "good" : score <= 500 ? "needs-improvement" : "poor";

  const observer = new PerformanceObserver((list) => {
    const interactions = {};

    for (let entry of list
      .getEntries()
      .filter((entry) => entry.interactionId)) {
      interactions[entry.interactionId] =
        interactions[entry.interactionId] || [];
      interactions[entry.interactionId].push(entry);
    }

    for (let interaction of Object.values(interactions)) {
      const entry = interaction.reduce((prev, curr) =>
        prev.duration >= curr.duration ? prev : curr
      );
      const entryTarget = interaction
        .map((entry) => entry.target)
        .find((target) => !!target);
      const value = entry.duration;

      callback({
        attribution: {
          eventEntry: entry,
          eventTarget: entryTarget,
          eventTime: entry.startTime,
          eventType: entry.name,
        },
        entries: interaction,
        name: "Interaction",
        rating: valueToRating(value),
        value,
      });
    }
  });

  observer.observe({
    type: "event",
    durationThreshold: 0,
    buffered: true,
  });
}

export function logInteraction(interaction) {
  console.groupCollapsed(
    `[${interaction.name}] %c${interaction.value.toFixed(0)} ms (${
      interaction.rating
    })`,
    `color: ${RATING_COLORS[interaction.rating] || "inherit"}`
  );

  console.log("Interaction target:", interaction.attribution.eventTarget);

  for (let entry of interaction.entries) {
    console.log(
      `Interaction event type: %c${entry.name}`,
      "font-family: monospace"
    );

    const adjustedPresentationTime = Math.max(
      entry.processingEnd,
      entry.startTime + entry.duration
    );

    console.table([
      {
        subPartString: "Input delay",
        "Time (ms)": Math.round(entry.processingStart - entry.startTime),
      },
      {
        subPartString: "Processing time",
        "Time (ms)": Math.round(entry.processingEnd - entry.processingStart),
      },
      {
        subPartString: "Presentation delay",
        "Time (ms)": Math.round(adjustedPresentationTime - entry.processingEnd),
      },
    ]);
  }

  console.log(interaction);
  console.groupEnd();

  // Push to dataLayer if interaction duration is 200ms or more
  if (interaction.value >= 200) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "poor_interaction",
      interaction: {
        name: interaction.name,
        value: interaction.value,
        rating: interaction.rating,
        target: interaction.attribution.eventTarget,
      },
    });
  }
}

export function logAllInteractions() {
  onInteraction(logInteraction);
}
