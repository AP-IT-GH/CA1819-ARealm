using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using interfaces;
using Newtonsoft.Json;

namespace Models
{
    public class Session
    {
        public long Id {get;set;}
        public string SessionCode{get;set;}
        [JsonIgnore]
        public ICollection<Team> Teams {get;set;}

        public List<District> Districts {get;set;}

        //String voor state op te slagen:
        public string CurrentStateString{get;set;}
        [NotMapped]
        public ISessionState CurrentState{get;set;}
    }
}