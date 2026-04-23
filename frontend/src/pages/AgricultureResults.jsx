import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AgricultureResults = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const results = state?.results || [];

    return (
        <div className="min-h-screen bg-[#f5f7fb] p-10">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-semibold mb-6">
                    Recommended Schemes ({results.length})
                </h1>

                {results.length === 0 ? (
                    <p>No schemes found.</p>
                ) : (
                    <div className="grid grid-cols-2 gap-6">
                        {results.map((s) => (
                            <div key={s.id} className="border p-5 rounded bg-white">
                                <h3 className="font-semibold">{s.title}</h3>
                                <p className="text-sm text-gray-500">{s.provider}</p>
                                <div className="text-blue-600 font-bold">{s.amount}</div>
                                <div className="text-sm">Deadline: {s.deadline}</div>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => navigate(-1)}
                    className="mt-10 px-6 py-2 bg-gray-200 rounded"
                >
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default AgricultureResults;