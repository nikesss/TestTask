using Microsoft.EntityFrameworkCore;
using ReactWebApi.Entities;
using System.Collections.Generic;

namespace ReactWebApi
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Item> Item { get; set; }
    }
}
