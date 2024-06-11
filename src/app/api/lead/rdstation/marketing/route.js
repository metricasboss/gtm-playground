import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // Estou extraindo a informações do formulário que veio do front end
  const { email, sessionId, clientId, firstName, lastName } = await req.json();

  try {
    // Criar ou atualizar um contato no ActiveCampaign
    const requestOptions = {
      method: "POST",
      url: `https://crm.rdstation.com/api/v1/contacts?token=${process.env.RD_ACCESS_TOKEN}`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        contact: {
          contact_custom_fields: [
            {
              custom_field_id: "6626b4d27baeee0012fa5875",
              value: clientId,
            },
            {
              custom_field_id: "6626b4dfa36db5000e0493e5",
              value: sessionId,
            },
          ],
          emails: [
            {
              email: `${email}`,
            },
          ],
          name: `${firstName} ${lastName}`,
        },
      },
    };

    const createContactResponse = await axios.request(requestOptions);

    return NextResponse.json(createContactResponse.data);
  } catch (error) {
    console.log(`Houve um error ${error}`);
    return NextResponse.json(error);
  }
}
