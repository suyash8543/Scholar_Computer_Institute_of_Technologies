function CoursesManager() {
    return (
        <div>

            <h1>Courses Manager</h1>

            <div className="table-card">

                <button className="primary-btn">
                    + Add Course
                </button>

                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>CCC</td>
                            <td>3 Months</td>
                            <td>₹3000</td>

                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default CoursesManager;