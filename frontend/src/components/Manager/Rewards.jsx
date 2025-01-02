import React from "react";

const Rewards = () => {
  // Sample data for chefs and waiters
  const chefsData = [
    { name: "Chef John", orders: 25, reward: 500 },
    { name: "Chef Sarah", orders: 30, reward: 600 },
    { name: "Chef Mike", orders: 15, reward: 300 },
  ];

  const waitersData = [
    { name: "Waiter Alice", orders: 50, reward: 250 },
    { name: "Waiter Bob", orders: 45, reward: 225 },
    { name: "Waiter Charlie", orders: 60, reward: 300 },
  ];

  return (
    <div className="mb-24">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-700 ">
        Rewards of the Month
      </h1>

      {/* Chef's Rewards Table */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Chef's Rewards
        </h2>
        <table className="min-w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Chef Name
              </th>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Number of Orders
              </th>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Rewards
              </th>
            </tr>
          </thead>
          <tbody>
            {chefsData.map((chef, index) => (
              <tr key={index} className="hover:bg-red-50">
                <td className="px-4 py-2 border border-gray-300">
                  {chef.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {chef.orders}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {chef.reward} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Waiter's Rewards Table */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Waiter's Rewards
        </h2>
        <table className="min-w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Waiter Name
              </th>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Number of Orders
              </th>
              <th className="px-4 py-2 text-left text-red-500 border border-gray-300">
                Rewards
              </th>
            </tr>
          </thead>
          <tbody>
            {waitersData.map((waiter, index) => (
              <tr key={index} className="hover:bg-red-50">
                <td className="px-4 py-2 border border-gray-300">
                  {waiter.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {waiter.orders}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {waiter.reward} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rewards;
