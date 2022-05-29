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
    getOneUser: '/api/Admin/GetUser',
    getUserRole: '/api/Admin/GetAllRolesById',
    updateUserRoles: '/api/Admin/UpdateUserRoles'

};