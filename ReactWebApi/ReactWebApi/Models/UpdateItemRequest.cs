namespace ReactWebApi.Models
{
    public class UpdateItemRequest
    {
        public int Id { get; set; }
        public string ItemText { get; set; }
        public bool Status { get; set; }
    }
}
