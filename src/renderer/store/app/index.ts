import {combineReducers} from '@reduxjs/toolkit';

import managedAccounts, {
  clearManagedAccounts,
  setManagedAccount,
  setManagedAccountBalance,
  unsetManagedAccount,
} from './managedAccounts';
import managedBanks, {changeActiveBank, clearManagedBanks, setManagedBank, unsetManagedBank} from './managedBanks';
import managedFriends, {clearManagedFriends, setManagedFriend, unsetManagedFriend} from './managedFriends';
import managedValidators, {
  clearManagedValidators,
  setManagedValidator,
  unsetActivePrimaryValidator,
  unsetManagedValidator,
} from './managedValidators';

export {
  clearManagedAccounts,
  clearManagedBanks,
  clearManagedFriends,
  clearManagedValidators,
  setManagedAccount,
  setManagedAccountBalance,
  setManagedBank,
  setManagedFriend,
  setManagedValidator,
  changeActiveBank,
  unsetActivePrimaryValidator,
  unsetManagedAccount,
  unsetManagedBank,
  unsetManagedFriend,
  unsetManagedValidator,
};

const appReducers = combineReducers({
  managedAccounts: managedAccounts.reducer,
  managedBanks: managedBanks.reducer,
  managedFriends: managedFriends.reducer,
  managedValidators: managedValidators.reducer,
});

export default appReducers;
