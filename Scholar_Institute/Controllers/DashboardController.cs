using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scholar_Institute.Data;

namespace Scholar_Institute.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DashboardController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDashboard()
        {
            var totalCourses = await _context.Courses.CountAsync();
            var totalContacts = await _context.Contacts.CountAsync();

            var recentContacts = await _context.Contacts
                .OrderByDescending(c => c.CreatedAt)
                .Take(5)
                .ToListAsync();

            return Ok(new
            {
                totalCourses,
                totalContacts,
                recentContacts
            });
        }
    }
}