module.exports = {
    validateNewAccount(accountInfo) {
        if (
          accountInfo.hasOwnProperty("first_name") &&
          accountInfo.hasOwnProperty("last_name") &&
          accountInfo.hasOwnProperty("position") &&
          accountInfo.hasOwnProperty("username") &&
          accountInfo.hasOwnProperty("property_id") &&
          accountInfo.hasOwnProperty("pincode")
        ) {
          return true;
        } else {
          return false;
        }
      },
    
    validateCredential(loginInfo) {
        if (
          loginInfo.hasOwnProperty("username") &&
          loginInfo.hasOwnProperty("property_id")
        ) {
          return true;
        } else {
          return false;
        }
      },
}