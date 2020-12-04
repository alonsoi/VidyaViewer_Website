using System;
namespace VidyaViewerAPI.Models
{
    public interface IAdministrator
    {
        int Id { get; set; }

        string Username { get; set; }

        string Password { get; set; }

        string FirstName { get; set; }

        string LastName { get; set; }
    }

    public class Administrator : IAdministrator
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}
