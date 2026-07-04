import { useEffect, useState } from "react";
import { FaSave, FaLink } from "react-icons/fa";
import api from "../../api/api";

export default function TestManager() {
    const [testLink, setTestLink] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLink();
    }, []);

    const fetchLink = async () => {
        try {
            const res = await api.get("/settings/testlink");

            if (res.data) {
                setTestLink(res.data.value || "");
            }
        } catch (err) {
            console.error("Error fetching link:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            await api.post("/settings/testlink", {
                key: "test_link",
                value: testLink
            });

            alert("Test Link Updated Successfully!");
        } catch (err) {
            console.error(err);
            alert("Unable to save test link.");
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container-fluid">

            <h2 className="mb-4 fw-bold">
                Manage Online Test
            </h2>

            <div className="card shadow-sm">

                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">
                        <FaLink className="me-2" />
                        Scholarship / Test Link
                    </h5>
                </div>

                <div className="card-body">

                    <div className="mb-3">
                        <label className="form-label">
                            Google Form / Scholarship Link
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Google Form Link"
                            value={testLink}
                            onChange={(e) => setTestLink(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            Preview
                        </label>

                        <div className="border rounded p-3 bg-light">

                            {testLink ? (
                                <a
                                    href={testLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {testLink}
                                </a>
                            ) : (
                                <span className="text-muted">
                                    No Link Available
                                </span>
                            )}

                        </div>
                    </div>

                    <button
                        className="btn btn-success"
                        onClick={handleSave}
                    >
                        <FaSave className="me-2" />
                        Save Changes
                    </button>

                </div>

            </div>

        </div>
    );
}