import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookmarks: []
}

const BookmarkSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		addBokmark: (state, action) => {
			state.bookmarks.push(action.payload)
		},
		removeBookmark: (state, action) => {
			state.bookmarks = state.bookmarks.filter((item) => item.title !== action.payload)
		}
	}
})

export const { addBokmark, removeBookmark } = BookmarkSlice.actions
export default BookmarkSlice.reducer
