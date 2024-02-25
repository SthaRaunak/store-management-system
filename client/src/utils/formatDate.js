//formatDate('2023-04-18T13:22:43.115+00:00');
const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);

    const dateOption = {
        month: "short",
        day: "numeric",
        year: "numeric",
        time: "numeric",
    };
    const timeOption = { hour12: true, hour: "numeric", minute: "numeric" };

    const dateString = date.toLocaleDateString("en-US", dateOption);

    const timeString = date.toLocaleTimeString("en-US", timeOption);

    return `${dateString} ${timeString}`;
};

export { formatCreatedAt };
