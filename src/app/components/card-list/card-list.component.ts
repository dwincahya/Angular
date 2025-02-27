import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { environment } from '../../../environments/environment.development';

interface Series {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: Series[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  seriesList: Series[] = [];
  apiUrl = `${environment.apiUrl}/series?page=1&limit=10`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ApiResponse>(this.apiUrl).subscribe(response => {
      if (response.status === 'success') {
        this.seriesList = response.data;
      }
    });
  }
}
