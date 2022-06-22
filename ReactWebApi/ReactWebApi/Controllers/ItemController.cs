using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactWebApi.Entities;
using ReactWebApi.Models;
using ReactWebApi.Services;

namespace ReactWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {

        private readonly IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet("getAll")]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            return Ok(await _itemService.GetItemsAsync());
        }

        [HttpGet("deleteItem")]
        public async Task<ActionResult> DeleteItems([FromQuery] int id)
        {
            try
            {
                await _itemService.DeleteItemAsync(id);
                return Ok("Item deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpPost("addItem")]
        public async Task<ActionResult> AddItem(AddItemRequest addItemRequest)
        {
            try
            {
                await _itemService.AddItemAsync(addItemRequest);
                return Ok("Item created");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("updateItem")]
        public async Task<ActionResult> UpdateItem(UpdateItemRequest updateItemRequest)
        {
            try
            {
                await _itemService.UpdateItemAsync(updateItemRequest);
                return Ok("Item updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
