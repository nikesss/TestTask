using ReactWebApi.Entities;
using ReactWebApi.Models;

namespace ReactWebApi.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetItemsAsync();
        Task UpdateItemAsync(UpdateItemRequest updateItemRequest);
        Task DeleteItemAsync(int id);
        Task AddItemAsync(AddItemRequest addItemRequest);
    }
}
