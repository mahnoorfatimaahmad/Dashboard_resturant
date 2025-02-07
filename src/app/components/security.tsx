export default function SecurityRoles() {
  const roles = [
    {
      title: "Role-based Access",
      description: "Admin, Staff, and Manager roles with defined permissions.",
    },
    {
      title: "Track User Activities",
      description: "Monitor and log user activities efficiently.",
    },
    {
      title: "Secure Login & Permissions",
      description: "Enhanced security with robust login and permission management.",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
  <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Security Features
  <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {role.title}
            </h3>
            <p className="text-gray-600">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
