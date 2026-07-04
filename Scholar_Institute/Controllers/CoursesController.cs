using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scholar_Institute.Data;
using Scholar_Institute.Models;

namespace Scholar_Institute.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CoursesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/courses
        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await _context.Courses.ToListAsync();
            return Ok(courses);
        }

        // POST: api/courses
        [HttpPost]
        public async Task<IActionResult> AddCourse([FromBody] Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return Ok(course);
        }

        // PUT: api/courses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(int id, [FromBody] Course course)
        {
            var existingCourse = await _context.Courses.FindAsync(id);

            if (existingCourse == null)
                return NotFound();

            existingCourse.CourseName = course.CourseName;
            existingCourse.Duration = course.Duration;
            existingCourse.Fees = course.Fees;
            existingCourse.Description = course.Description;
            existingCourse.ImageUrl = course.ImageUrl;

            await _context.SaveChangesAsync();

            return Ok(existingCourse);
        }

        // DELETE: api/courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
                return NotFound();

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Course deleted successfully." });
        }
    }
}