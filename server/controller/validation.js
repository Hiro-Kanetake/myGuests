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
      
  validateNewGuest(newGuestInfo) {
    if (
      newGuestInfo.hasOwnProperty("property_id") &&
      newGuestInfo.hasOwnProperty("title") &&
      newGuestInfo.hasOwnProperty("first_name") &&
      newGuestInfo.hasOwnProperty("last_name")
    ) {
      return true;
    } else {
      return false;
    }
  },

  validateViewCredential(viewGuestCredential) {
    if (
      viewGuestCredential.hasOwnProperty("property_id") &&
      viewGuestCredential.hasOwnProperty("account_id")
    ) {
      return true;
    } else {
      return false;
    }
  }
}