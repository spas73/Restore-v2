using System;

namespace API.RequestHelpers;

public class PaginationParams
{
    private const int MaxPageSize = 50;
    public int PageNumber { get; set; }

    private int _PageSize = 8;
    public int PageSize
    {
        get => _PageSize;
        set => _PageSize = value > MaxPageSize ? MaxPageSize : value;
    }





}
