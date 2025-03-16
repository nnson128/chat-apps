import { createAsyncThunk } from "@reduxjs/toolkit";
import friendshipService from "../../services/friendshipService";
import userService from "../../services/userService";

export const fetchFriendList = createAsyncThunk(
  "friendship/fetchFriendList",
  async () => await friendshipService.getFriendList()
);

export const fetchFriendSuggestions = createAsyncThunk(
  "friendship/fetchFriendSuggestions",
  async () => await userService.getFriendSuggestions()
);

export const fetchPendingRequests = createAsyncThunk(
  "friendship/fetchPendingRequests",
  async () => {
    const res = await friendshipService.getPendingRequests();
    return res.data;
  }
);

export const sendFriendRequest = createAsyncThunk(
  "friendship/sendFriendRequest",
  async (friendId) => await friendshipService.sendFriendRequest(friendId)
);

export const acceptFriendRequest = createAsyncThunk(
  "friendship/acceptFriendRequest",
  async (friendId) => await friendshipService.acceptFriendRequest(friendId)
);

export const removeFriend = createAsyncThunk(
  "friendship/removeFriend",
  async (friendId) => {
    await friendshipService.unfriendUser(friendId);
    return { friendId };
  }
);
