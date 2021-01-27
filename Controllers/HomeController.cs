using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZachDFirstWebApp.Models;

namespace ZachDFirstWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }

        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost("GradeCalculator")]
        public IActionResult GradeCalculator(GradeCalculator model)
        {
            return View();
        }
    }
}
