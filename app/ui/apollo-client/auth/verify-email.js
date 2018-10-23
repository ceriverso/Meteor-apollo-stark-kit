import gql from 'graphql-tag';
import { storeLoginToken } from './store';

async function verifyEmail(token, apollo) {
  const result = await apollo.mutate({
    mutation: gql`
      mutation verifyEmail($token: String!) {
        verifyEmail(token: $token) {
          id
          token
          tokenExpires
        }
      }
    `,
    variables: {
      token,
    },
  });

  const { id, token: loginToken, tokenExpires } = result.data.verifyEmail;
  await storeLoginToken(id, loginToken, new Date(tokenExpires));
  return id;
}

export default verifyEmail;
