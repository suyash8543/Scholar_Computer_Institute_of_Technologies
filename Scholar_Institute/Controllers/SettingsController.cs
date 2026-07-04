using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scholar_Institute.Data;
using Scholar_Institute.Models;

namespace Scholar_Institute.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SettingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SettingsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("testlink")]
        public async Task<IActionResult> GetTestLink()
        {
            var setting = await _context.Settings
                .FirstOrDefaultAsync(x => x.Key == "test_link");

            if (setting == null)
            {
                return Ok(new Setting
                {
                    Key = "test_link",
                    Value = ""
                });
            }

            return Ok(setting);
        }

        [HttpPost("testlink")]
        public async Task<IActionResult> SaveTestLink([FromBody] Setting model)
        {
            var setting = await _context.Settings
                .FirstOrDefaultAsync(x => x.Key == "test_link");

            if (setting == null)
            {
                model.Key = "test_link";
                _context.Settings.Add(model);
            }
            else
            {
                setting.Value = model.Value;
            }

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Test link updated successfully."
            });
        }
    }
}