using System.ComponentModel.DataAnnotations;

namespace Scholar_Institute.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CourseName { get; set; } = string.Empty;

        public string Duration { get; set; } = string.Empty;

        public decimal Fees { get; set; }

        public string Description { get; set; } = string.Empty;

        public string? ImageUrl { get; set; }
    }
}