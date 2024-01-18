export const generate_date = date => {
    const month = String(new Date(date).toLocaleString("default", {month: "short"}))
    const day = String(new Date(date).getDate()).padStart(2, '0')
    const year = String(new Date(date).getFullYear())
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}
