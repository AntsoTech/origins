// Create a fonction to load more content and fetch the first query with the next one
export const loadmore = (data, fetchMore) => {
    fetchMore({
        variables: {
            after: data.allVideos.cursor.after,
        },
        updateQuery: (
            previousResult,
            { fetchMoreResult, variables: { after } }
        ) => {
            return {
                allVideos: {
                    cursor: fetchMoreResult.allVideos.cursor,
                    items: [
                        ...previousResult.allVideos.items,
                        ...fetchMoreResult.allVideos.items,
                    ],
                },
            };
        },
    });
};
