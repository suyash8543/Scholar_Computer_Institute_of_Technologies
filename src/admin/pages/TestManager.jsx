function TestManager() {
    return (
        <div>

            <h1>Online Test Manager</h1>

            <div className="table-card">

                <input
                    type="text"
                    placeholder="Test Name"
                />

                <input
                    type="text"
                    placeholder="Google Form Link"
                />

                <button className="primary-btn">
                    Save Test
                </button>

            </div>

        </div>
    );
}

export default TestManager;