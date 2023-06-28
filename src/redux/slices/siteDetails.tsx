import { createSlice } from "@reduxjs/toolkit";

type SiteDetails = {
  theme: any;
  siteId: string;
};

const initialState: SiteDetails = {
  theme: {},
  siteId: "",
};
const userDetails = createSlice({
  name: "site",
  initialState,
  reducers: {
    setTemplateConfig: (state, action) => {
      state.theme = action.payload?.theme;
      state.siteId = action.payload?.siteId;
    },
  },
});

export const { setTemplateConfig } = userDetails.actions;
export default userDetails.reducer;
