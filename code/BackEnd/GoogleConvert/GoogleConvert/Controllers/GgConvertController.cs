﻿using GoogleConvert.Dto;
using GoogleConvert.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace GoogleConvert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GgConvertController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public GgConvertController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IGgConvert googleConvert = new GgConvert(new ConvertToArrByte());

        [HttpPost("convert")]
        public ResponseData ggConvertData(string inputType, string outputType, string inputValue)
        {
            return googleConvert.ggConvertData(inputType, outputType, inputValue);
        }
    }
}
