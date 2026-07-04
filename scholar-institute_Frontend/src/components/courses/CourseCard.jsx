function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
                src={course.image}
                alt={course.title}
                className="h-52 w-full object-cover"
            />

            <div className="p-5">
                <h2 className="text-xl font-bold">
                    {course.title}
                </h2>

                <p className="text-gray-600 mt-2">
                    {course.description}
                </p>

                <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default CourseCard;