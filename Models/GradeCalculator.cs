using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ZachDFirstWebApp.Models
{
    public class GradeCalculator
    {
        [Required]
        [Range(0,100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int groupP { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int exams { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }

    }
}
