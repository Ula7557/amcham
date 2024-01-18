export const getStaffListCount = id => {
    switch (parseInt(id)) {
        case 76:
            return 4;
        case 77:
            return 3;
        case 79:
            return 2;
        case 80:
            return 1;
        default:
            return 1
    }
}
