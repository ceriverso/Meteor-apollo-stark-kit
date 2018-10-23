import gql from 'graphql-tag';

async function forgotPassword({ email }, apollo) {
  const result = await apollo.mutate({
    mutation: gql`
      mutation forgotPassword($email: String!) {
        forgotPassword(email: $email) {
          success
        }
      }
    `,
    variables: {
      email,
    },
  });

  const { success } = result.data.forgotPassword;
  return success;
}

export default forgotPassword;
