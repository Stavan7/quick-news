import BookmarkSlice from "./features/bookmark/BookmarkSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default BookmarkStore = configureStore({
	reducer: {
		bookmark: BookmarkSlice
	}
})