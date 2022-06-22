using Microsoft.EntityFrameworkCore;
using ReactWebApi.Entities;
using ReactWebApi.Models;

namespace ReactWebApi.Services
{
    public class ItemServices : IItemService
    {
        private readonly AppDbContext _context;
        public ItemServices(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Item>> GetItemsAsync()
        {
            return await Task.FromResult(_context.Item);
        }

        public async Task AddItemAsync(AddItemRequest addItemRequest)
        {
            await _context.Item.AddAsync(new() {
                ItemText = addItemRequest.ItemText,
                Status = addItemRequest.Status,
            });

            await _context.SaveChangesAsync();
        }

        public async Task DeleteItemAsync(int id)
        {
            var item = await _context.Item.FirstOrDefaultAsync(x => x.Id == id);

            _context.Item.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateItemAsync(UpdateItemRequest updateItemRequest)
        {
            var item = await _context.Item.FirstOrDefaultAsync(x => x.Id == updateItemRequest.Id);

            item.ItemText = updateItemRequest.ItemText;
            item.Status = updateItemRequest.Status;
            await _context.SaveChangesAsync();
        }
    }
}
