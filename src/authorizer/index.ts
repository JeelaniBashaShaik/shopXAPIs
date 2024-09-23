import { OAuth2Client } from 'google-auth-library';
//import { } from '@aws-sdk/client-api-gateway';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const handler = async (event: any): Promise<any> => {
  try {
    // Extract the token from the Authorization header
    const token = event.authorizationToken.replace('Bearer ', '');

    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '',
    });

    const payload = ticket.getPayload();
    
    if (!payload) {
      throw new Error('Invalid token payload');
    }

    // You can add additional checks here, e.g., checking if the user exists in your database

    return {
      principalId: payload.sub, // Use Google's subject identifier as the principal ID
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: event.methodArn,
          },
        ],
      },
      // Optionally, you can pass additional context to the authorized requests
      context: {
        email: payload.email,
        name: payload.name,
      },
    };
  } catch (error) {
    console.error('Authorization failed:', error);
    throw new Error('Unauthorized');
  }
};
