import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import api from "../../api/api";

export default function ManageCourse() {

    const [courses, setCourses] = useState([]);

    const [formData, setFormData] = useState({
        courseName: "",
        duration: "",
        fees: "",
        description: "",
        imageUrl: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await api.get("/courses");
            setCourses(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (editId) {

                await api.put(`/courses/${editId}`, formData);

                alert("Course Updated");

            } else {

                await api.post("/courses", formData);

                alert("Course Added");

            }

            setFormData({
                courseName: "",
                duration: "",
                fees: "",
                description: "",
                imageUrl: ""
            });

            setEditId(null);

            fetchCourses();

        } catch (err) {

            console.log(err);

        }
    };

    const handleEdit = (course) => {

        setEditId(course.id);

        setFormData({
            courseName: course.courseName,
            duration: course.duration,
            fees: course.fees,
            description: course.description,
            imageUrl: course.imageUrl
        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this course?")) return;

        try {

            await api.delete(`/courses/${id}`);

            fetchCourses();

        } catch (err) {

            console.log(err);

        }

    };

    return (
        <div className="container-fluid">

            <h2 className="mb-4">Manage Courses</h2>

            <div className="card shadow mb-4">

                <div className="card-header bg-primary text-white">

                    {editId ? "Update Course" : "Add Course"}

                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label>Course Name</label>

                                <input
                                    className="form-control"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Duration</label>

                                <input
                                    className="form-control"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Fees</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="fees"
                                    value={formData.fees}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Image URL</label>

                                <input
                                    className="form-control"
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-12 mb-3">

                                <label>Description</label>

                                <textarea
                                    rows="3"
                                    className="form-control"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <button className="btn btn-success">

                            <FaPlus className="me-2"/>

                            {editId ? "Update Course" : "Add Course"}

                        </button>

                    </form>

                </div>

            </div>

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    All Courses

                </div>

                <div className="table-responsive">

                    <table className="table table-hover mb-0">

                        <thead>

                            <tr>

                                <th>#</th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Fees</th>
                                <th width="170">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {courses.map((course, index) => (

                                <tr key={course.id}>

                                    <td>{index + 1}</td>

                                    <td>{course.courseName}</td>

                                    <td>{course.duration}</td>

                                    <td>₹{course.fees}</td>

                                    <td>

                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => handleEdit(course)}
                                        >
                                            <FaEdit/>
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(course.id)}
                                        >
                                            <FaTrash/>
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}