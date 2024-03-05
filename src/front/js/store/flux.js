const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {

			getPrivate: async () => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/users", {
					method: "GET",
					headers: {
					  "Content-Type": "application/json",
					  Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				  });
				const data = await resp.json();
				console.log(data);
				return data;			
			},

			register: async (e) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(e),
				  });
				  const data = await resp.json();
				  return data;
				} catch (error) {
				  console.log(`Error en funcion register(${e}):`, error);
				}
			  },
			  login: async (e) => {
				try {
				  const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(e),
				  });
				  const data = await resp.json();
				  if (data.ok) {
					localStorage.setItem("token", data.token);
				  }
				  return data;
				} catch (error) {
				  console.log(`Error en funcion login(${e}):`, error);
				}
			  },
		}
	};
};

export default getState;
