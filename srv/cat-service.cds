using my.requests as my from '../db/data-model';

service CatalogService {
     entity Requests as projection on my.Requests;
}