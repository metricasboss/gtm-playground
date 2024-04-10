import { Client } from "@hubspot/api-client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // Autenticando com a api do hubspot
  const hubspotClient = new Client({
    accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
  });

  // Estou extraindo a informações do formulário que veio do front end
  const { email, sessionId, clientId } = await req.json();

  try {
    // Criar ou atualizar um contato no HubSpot
    const contactObj = {
      properties: {
        email,
        session_id: sessionId,
        client_id: clientId,
      },
    };

    const createContactResponse =
      await hubspotClient.crm.contacts.basicApi.create(contactObj);

    return NextResponse.json(createContactResponse);
  } catch (error) {
    console.log(`Houve um error ${error}`);
    return NextResponse.json(error);
  }
}
