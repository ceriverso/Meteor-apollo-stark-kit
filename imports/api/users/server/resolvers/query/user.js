//------------------------------------------------------------------------------
// We access to the current user here via the context. The current
// user is added to the context by the 'meteor/apollo' package.
const user = (root, args, context) => (
  context.user
);
//------------------------------------------------------------------------------

export default user;
