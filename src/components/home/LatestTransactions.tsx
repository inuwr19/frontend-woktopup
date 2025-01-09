import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const transactions = [
  { id: 1, game: 'Mobile Legends', amount: '100 Diamonds', time: '2 minutes ago', user: 'John D.' },
  { id: 2, game: 'PUBG Mobile', amount: '300 UC', time: '5 minutes ago', user: 'Sarah M.' },
  { id: 3, game: 'Genshin Impact', amount: '980 Crystals', time: '8 minutes ago', user: 'Alex R.' },
];

export const LatestTransactions = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Transactions</h2>
        <div className="grid gap-4">
          {transactions.map(({ id, game, amount, time, user }) => (
            <div key={id} className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{game}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900 dark:text-white">{user}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};