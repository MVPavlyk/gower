const baseURL = 'https://localhost:44376';

export default baseURL;

export const urls = {
    register: '/api/User/Register',
    login: '/api/User/Login',
    logout: '/api/User/Logout',
    changePsw: '/api/User/ChangeSelfPassword',
    update: '/api/User/UpdateSelf',
    getUser: '/api/User/GetCurrent',

    deleteUser: '/api/User/Delete',
    createPlace: '/api/Admin/CreatePlace',
    deletePlace: '/api/Admin/DeletePlace',
    createTable: '/api/Admin/CreateTablesAndAssign',
    getPaginatedUsers: '/api/Admin/GetAll',
    getUsersByRoleName: '/api/Admin/GetUsersByRoleName',
    getOneUser: '/api/Admin/GetUser',
    getUserRole: '/api/Admin/GetAllRolesById',
    updateUserRoles: '/api/Admin/UpdateUserRoles',
    getMyRoles: '/api/User/GetMyRoles',

    getMyPlaces: '/api/PlaceOwner/GetMyPlaces',
    occupyTable: '/api/PlaceOwner/OccupyTable?tableId=',
    freeTable: '/api/PlaceOwner/FreeTable?tableId=',

    uploadPhoto: '/api/Storage/UploadFile',
    downloadPhoto: '/api/Storage/DownloadFile',
    deletePhoto: '/api/Storage/DeleteFile',

    tablesOfPlace: '/api/Place/GetTablesByPlace',

    createBooking: '/api/Booking/CreateBooking',
    getMyBookings: '/api/Booking/GetMyBookings',
    getBookingsForToday: '/api/Booking/GetBookingsForTodayByPlace',
    updateBooking: '/api/Booking/UpdateBooking',
    deleteBooking: '/api/Booking/DeleteBooking',

    getPlacesPaginated: '/api/Place/GetPagedPlaces',
    getOnePlace: '/api/Place/GetPlaceById',
    getDescription: '/api/Storage/GetDescription'
};