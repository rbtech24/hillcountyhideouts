import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  newsletterSignups, type NewsletterSignup, type InsertNewsletterSignup,
  availabilitySearches, type AvailabilitySearch, type InsertAvailabilitySearch
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter methods
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  
  // Availability search methods
  createAvailabilitySearch(search: InsertAvailabilitySearch): Promise<AvailabilitySearch>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletterSignups: Map<number, NewsletterSignup>;
  private availabilitySearches: Map<number, AvailabilitySearch>;
  
  private userCurrentId: number;
  private contactCurrentId: number;
  private newsletterCurrentId: number;
  private searchCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSignups = new Map();
    this.availabilitySearches = new Map();
    
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.newsletterCurrentId = 1;
    this.searchCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt,
      phone: insertContact.phone || null,
      responded: false 
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Newsletter methods
  async createNewsletterSignup(insertSignup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const id = this.newsletterCurrentId++;
    const createdAt = new Date();
    const signup: NewsletterSignup = { 
      ...insertSignup, 
      id, 
      createdAt,
      active: true 
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }
  
  // Availability search methods
  async createAvailabilitySearch(insertSearch: InsertAvailabilitySearch): Promise<AvailabilitySearch> {
    const id = this.searchCurrentId++;
    const createdAt = new Date();
    const search: AvailabilitySearch = { 
      ...insertSearch, 
      id, 
      createdAt,
      guests: insertSearch.guests || null,
      converted: false 
    };
    this.availabilitySearches.set(id, search);
    return search;
  }
}

export const storage = new MemStorage();
