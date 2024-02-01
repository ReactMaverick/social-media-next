// Function to calculate the time difference and return a human-readable string
export const getTimeElapsed = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);

    const timeDifference = now - createdDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    // If more than 24 hours, you may want to display the actual date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return createdDate.toLocaleDateString(undefined, options);
};

export const hobbyIcons = {
    photography: "ion:bicycle",
    shopping: "solar:camera-broken",
    traveling: "guidance:plane",
    eating: "ion:restaurant-outline",
    painting: "mdi:paint-outline",
    drawing: "mdi:paint-outline",
    writing: "emojione-monotone:writing-hand",
    cricket: "mdi:cricket",
    football: "solar:football-bold",
    soccer: "solar:football-bold",
    volleyball: "mdi:volleyball",
    basketball: "mdi:basketball",
    reading: "streamline:book-reading",
    cooking: "ph:cooking-pot",
    gardening: "game-icons:gardening-shears",
    dancing: "mdi:dance-ballroom",
    fishing: "icon-park-outline:fishing",
    other: "material-symbols:interests"
};