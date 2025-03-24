"use client";
import React from 'react';

const scholarships = [
  { slNo: 1, type: 'Minority-1', authority: 'Minority Commission, Ranchi', amount: '₹17000' },
  { slNo: 2, type: 'Ex-serviceman-1', authority: 'Uttar Pradesh Sainik Kalyan', amount: '₹2500' },
  { slNo: 3, type: 'SC-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹49760' },
  { slNo: 4, type: 'SC-1', authority: 'Indian Oil, New Delhi', amount: '₹12000' },
  { slNo: 5, type: 'SC-3', authority: 'Indian Oil, New Delhi', amount: '₹108000' },
  { slNo: 6, type: 'ST-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹49760' },
  { slNo: 7, type: 'Gen-1', authority: 'SitaRam Jindal Foundation, New Delhi', amount: '₹2400' },
  { slNo: 8, type: 'SC-1', authority: 'Indian Oil, New Delhi', amount: '₹12000' },
  { slNo: 9, type: 'SC-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹41600' },
  { slNo: 10, type: 'ST-3', authority: 'Director of Tech. Edn., Itanagar', amount: '₹17800' },
  { slNo: 11, type: 'BCE-1', authority: 'BC Welfare, WB', amount: '₹15880' },
  { slNo: 12, type: 'SC-2', authority: 'Welfare of SC, Assam', amount: '₹27368' },
  { slNo: 13, type: 'SC-1', authority: 'Tech. Edn., HP', amount: '₹6000' },
  { slNo: 14, type: 'SC-1', authority: 'Social Welfare Dept., Karnataka', amount: '₹50000' },
  { slNo: 15, type: 'Minority-1', authority: 'Director of Tech. Edn., Thiruvanthpuran', amount: '₹20000' },
  { slNo: 16, type: 'OBC-1', authority: 'ST Dept. Chhattisgarh, Raipur', amount: '₹13260' },
  { slNo: 17, type: 'SC-1', authority: 'Director of Tech. Edn., H.P.', amount: '₹6000' },
  { slNo: 18, type: 'ST-2', authority: 'Engineers India, New Delhi', amount: '₹18000' },
  { slNo: 19, type: 'ST-1', authority: 'ST Development, U.P.', amount: '₹15300' },
  { slNo: 20, type: 'Gen-1', authority: 'Director of Tech. Edn., Tripura', amount: '₹4500' },
  { slNo: 21, type: 'OBC-1', authority: 'District Welfare Nagpur, M.P.', amount: '₹21060' },
  { slNo: 22, type: 'Gen-1', authority: 'Director of Tech. Edn., Assam', amount: '₹10600' },
  { slNo: 23, type: 'ST-1', authority: 'Director of Tech. Edn., Assam', amount: '₹14630' },
  { slNo: 24, type: 'Gen-2', authority: 'Director of Tech. Edn., Tripura', amount: '₹18000' },
  { slNo: 25, type: 'ST-2', authority: 'Engineers India, New Delhi', amount: '₹18000' },
  { slNo: 26, type: 'ST-3', authority: 'Director of Tech. Edn., Kohima', amount: '₹34800' },
  { slNo: 27, type: 'ST-1', authority: 'Director of Tech. Edn., Andhra Pradesh', amount: '₹10600' },
  { slNo: 28, type: 'SC-1', authority: 'Social welfare, Krishna Dist. A.P.', amount: '₹17044' },
  { slNo: 29, type: 'SC-2', authority: 'District Welfare U.P.', amount: '₹24510' },
  { slNo: 30, type: 'Gen-1', authority: 'Director of Tech. Edn., Tripura', amount: '₹3600' },
  { slNo: 31, type: 'SC-158', authority: 'District Welfare, Patna', amount: '₹3165600' },
  { slNo: 32, type: 'ST-53', authority: 'District Welfare, Patna', amount: '₹857000' },
  { slNo: 33, type: 'OBC-21', authority: 'District Welfare, Patna', amount: '₹490810' },
  { slNo: 34, type: 'Minority-14', authority: 'Bihar State Minority Fin. Corp., Patna', amount: '₹39500' },
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-red-900 py-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Scholarship
        </h1>
      </div>

      <div className="mx-auto px-4 py-4 max-w-7xl">
        <div className="bg-red-800 text-white p-4 rounded-t-lg grid grid-cols-12 font-semibold">
          <div className="col-span-1">SL No.</div>
          <div className="col-span-3">Scholarship/Stipends</div>
          <div className="col-span-5">Awarding Authority</div>
          <div className="col-span-3">Amount</div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {scholarships.map((item, index) => (
            <div 
              key={item.slNo}
              className={`grid grid-cols-12 p-4 hover:bg-red-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="col-span-1 text-gray-800">{item.slNo}</div>
              <div className="col-span-3 text-gray-800 font-medium">{item.type}</div>
              <div className="col-span-5 text-gray-700">{item.authority}</div>
              <div className="col-span-3 text-red-800 font-medium">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}