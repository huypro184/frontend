import axiosClient from "./axiosClient";

const projectApi = {
  getAll: (page = 1, search = "") =>
    axiosClient.get(`/projects`, {
      params: { page, limit: 8, search },
    }),

  create: (data) => axiosClient.post(`/projects`, data),

  update: (id, data) => axiosClient.patch(`/projects/${id}`, data),

  delete: (id) => axiosClient.delete(`/projects/${id}`),

  // getUnassigned: (adminId, search = "") =>
  // axiosClient.post(`/projects/${adminId}/assign-project`, {
  //     params: { search },
  //   }),

  // getUnassigned: () => axiosClient.get(`/projects/unassigned/projects`),

  getUnassignedList: (search = "") => 
    axiosClient.get(`/projects/unassigned/projects`, {
      params: { search } // Truyền search lên server
    }),

  // HÀM 2: Hàm nghiệp vụ gán dự án cho Admin (Đổi tên để tránh trùng)
  getUnassignedForAdmin: (adminId, search = "") =>
    axiosClient.post(`/projects/${adminId}/assign-project`, {
      params: { search },
    }),

  assignToUser: (userId, projectName) =>
  axiosClient.post(`/projects/assign-project`, {
    userId,
    projectName,
  }),

};

export default projectApi;
