import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // Estou extraindo a informações do formulário que veio do front end
  const { email, sessionId, clientId } = await req.json();

  try {
    // Criar ou atualizar um contato no ActiveCampaign
    const requestOptions = {
      method: "POST",
      url: `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contacts/`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Api-Token": process.env.ACTIVE_CAMPAIGN_TOKEN,
      },
      data: {
        contact: {
          email,
          fieldValues: [
            {
              field: "1", // client_id
              value: clientId,
            },
            {
              field: "2", // session_id
              value: sessionId,
            },
          ],
        },
      },
    };

    const createContactResponse = await axios.request(requestOptions);

    return NextResponse.json(createContactResponse);
  } catch (error) {
    console.log(`Houve um error ${error}`);
    return NextResponse.json(error);
  }
}
