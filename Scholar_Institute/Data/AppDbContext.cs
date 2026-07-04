using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Scholar_Institute.Models;

namespace Scholar_Institute.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Course> Courses => Set<Course>();

        public DbSet<Contact> Contacts => Set<Contact>();

        public DbSet<Setting> Settings => Set<Setting>();
    }
}