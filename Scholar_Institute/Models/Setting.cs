using System.ComponentModel.DataAnnotations;

namespace Scholar_Institute.Models
{
    public class Setting
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Key { get; set; } = string.Empty;

        public string Value { get; set; } = string.Empty;
    }
}